import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import { LoadingOverlay } from "./LoadingOverlay.js";

import { Swipeable, LEFT, RIGHT } from 'react-swipeable';

import css from '../css/ImageGallery.css';

export class Gallery extends React.PureComponent
{
    static propTypes = {
        gallery: PropTypes.array.isRequired,
        path: PropTypes.string.isRequired,
    }

    state = {
        loading: true,
        gallery: [],
    }

    setGallery()
    {
        const path = this.props.path;
        const loading = false;
        const gallery = this.props.gallery.map(img => ({original: path+'/'+img, thumbnail: path+'/thumb/'+img}) );
        this.setState({ loading, gallery });
    }

    renderLeftNav = (onClick, disabled) =>
    {
        return (<button
            type='button'
            className={css.imageGalleryLeftNav}
            disabled={disabled}
            onClick={onClick}
            aria-label='Previous Slide'
        />);
    }

    renderRightNav = (onClick, disabled) =>
    {
        return (<button
            type='button'
            className={css.imageGalleryRightNav}
            disabled={disabled}
            onClick={onClick}
            aria-label='Next Slide'
        />);
    }

    renderFullscreenButton = (onClick, isFullscreen) =>
    {
        return (<button
            type='button'
            className={[css.imageGalleryFullscreenButton, isFullscreen ? css.active : null].join(' ')}
            onClick={onClick}
            aria-label='Open Fullscreen'
        />);
    }

    render()
    {
        return (<React.Fragment>
            {this.state.loading ? <LoadingOverlay /> : null}
            <NewImageGallery
                items={this.state.gallery}
                showPlayButton={false}
                autoPlay={false}
                showFullscreenButton={false}
                renderLeftNav={this.renderLeftNav}
                renderRightNav={this.renderRightNav}
                renderFullscreenButton={this.renderFullscreenButton}
            />
        </React.Fragment>);
    }

    componentDidMount()
    {
        this.setGallery();
    }
}

export class NewImageGallery extends ImageGallery
{
    _getAlignmentClassName(index) {
        /*
         Necessary for lazing loading
         */
        let {currentIndex} = this.state;
        let alignment = '';
        const leftClassName = 'left';
        const centerClassName = 'center';
        const rightClassName = 'right';

        switch (index) {
            case (currentIndex - 1):
                alignment = css[leftClassName];
                break;
            case (currentIndex):
                alignment = css[centerClassName];
                break;
            case (currentIndex + 1):
                alignment = css[rightClassName];
                break;
        }

        if (this.props.items.length >= 3 && this.props.infinite) {
            if (index === 0 && currentIndex === this.props.items.length - 1) {
                // set first slide as right slide if were sliding right from last slide
                alignment = css[rightClassName];
            } else if (index === this.props.items.length - 1 && currentIndex === 0) {
                // set last slide as left slide if were sliding left from first slide
                alignment = css[leftClassName];
            }
        }

        return alignment;
    }

    _renderItem = (item) => {
        const onImageError = this.props.onImageError || this._handleImageError;

        return (
            <div className={css.imageGalleryImage}>
                {
                    item.imageSet ?
                        <picture
                            onLoad={this.props.onImageLoad}
                            onError={onImageError}
                        >
                            {
                                item.imageSet.map((source, index) => (
                                    <source
                                        key={index}
                                        media={source.media}
                                        srcSet={source.srcSet}
                                        type={source.type}
                                    />
                                ))
                            }
                            <img
                                alt={item.originalAlt}
                                src={item.original}
                            />
                        </picture>
                        :
                        <img
                            src={item.original}
                            alt={item.originalAlt}
                            srcSet={item.srcSet}
                            sizes={item.sizes}
                            title={item.originalTitle}
                            onLoad={this.props.onImageLoad}
                            onError={onImageError}
                        />
                }

                {
                    item.description &&
                    <span className={css.imageGalleryDescription}>
              {item.description}
            </span>
                }
            </div>
        );
    };

    _renderThumbInner = (item) => {
        let onThumbnailError = this.props.onThumbnailError || this._handleImageError;

        return (
            <div className={css.imageGalleryThumbnailInner}>
                <img
                    src={item.thumbnail}
                    alt={item.thumbnailAlt}
                    title={item.thumbnailTitle}
                    onError={onThumbnailError}
                />
                {item.thumbnailLabel &&
                <div className={css.imageGalleryThumbnailLabel}>
                    {item.thumbnailLabel}
                </div>
                }
            </div>
        );
    };

    render() {
        const {
            currentIndex,
            isFullscreen,
            modalFullscreen,
            isPlaying,
        } = this.state;

        const {
            infinite,
            slideOnThumbnailOver,
            isRTL,
            lazyLoad,
        } = this.props;

        const thumbnailStyle = this._getThumbnailStyle();
        const thumbnailPosition = this.props.thumbnailPosition;

        const slideLeft = this._slideLeft;
        const slideRight = this._slideRight;

        let slides = [];
        let thumbnails = [];
        let bullets = [];

        this.props.items.forEach((item, index) => {
            const alignment = this._getAlignmentClassName(index);
            const originalClass = item.originalClass ? css[item.originalClass] : '';
            const thumbnailClass = item.thumbnailClass ? css[item.thumbnailClass] : '';

            const renderItem = item.renderItem ||
                this.props.renderItem || this._renderItem;

            const renderThumbInner = item.renderThumbInner ||
                this.props.renderThumbInner || this._renderThumbInner;

            const showItem = !lazyLoad || alignment || this._lazyLoaded[index];
            if (showItem && lazyLoad && !this._lazyLoaded[index]) {
                this._lazyLoaded[index] = true;
            }

            let slideStyle = this._getSlideStyle(index);

            const slide = (
                <div
                    key={index}
                    className={css.imageGallerySlide +' '+ alignment +' '+ originalClass}
                    style={Object.assign(slideStyle, this.state.style)}
                    onClick={this.props.onClick}
                    onTouchMove={this.props.onTouchMove}
                    onTouchEnd={this.props.onTouchEnd}
                    onTouchStart={this.props.onTouchStart}
                    onMouseOver={this.props.onMouseOver}
                    onMouseLeave={this.props.onMouseLeave}
                    role={this.props.onClick && 'button'}
                >
                    {showItem ? renderItem(item) : <div style={{ height: '100%' }}></div>}
                </div>
            );

            if (infinite) {
                // don't add some slides while transitioning to avoid background transitions
                if (this._shouldPushSlideOnInfiniteMode(index)) {
                    slides.push(slide);
                }
            } else {
                slides.push(slide);
            }

            if (this.props.showThumbnails) {
                thumbnails.push(
                    <a
                        key={index}
                        role='button'
                        aria-pressed={currentIndex === index ? 'true' : 'false'}
                        aria-label={`Go to Slide ${index + 1}`}
                        className={[css.imageGalleryThumbnail,(currentIndex === index ? css.active : ''),thumbnailClass].join(' ')}
                        onMouseLeave={slideOnThumbnailOver ? this._onThumbnailMouseLeave : undefined}
                        onMouseOver={event => slideOnThumbnailOver ? this._onThumbnailMouseOver(event, index) : undefined}
                        onClick={event => this._onThumbnailClick(event, index)}
                    >
                        {renderThumbInner(item)}
                    </a>
                );
            }

            if (this.props.showBullets) {
                const bulletOnClick = event => {
                    if(item.bulletOnClick){
                        item.bulletOnClick({item, itemIndex: index, currentIndex});
                    }
                    return this.slideToIndex.call(this, index, event);
                };
                bullets.push(
                    <button
                        key={index}
                        type='button'
                        className={[
                            css.imageGalleryBullet,
                            currentIndex === index ? css.active : '',
                            css[item.bulletClass] || ''
                        ].join(' ')}
                        onClick={bulletOnClick}
                        aria-pressed={currentIndex === index ? 'true' : 'false'}
                        aria-label={`Go to Slide ${index + 1}`}
                    >
                    </button>
                );
            }
        });

        const slideWrapper = (
            <div
                ref={this._initGalleryResizing}
                className={`${css.imageGallerySlideWrapper} ${thumbnailPosition} ${isRTL ? css.imageGalleryRtl : ''}`}
            >

                {this.props.renderCustomControls && this.props.renderCustomControls()}

                {
                    this.props.showFullscreenButton &&
                    this.props.renderFullscreenButton(this._toggleFullScreen, isFullscreen)
                }

                {
                    this.props.showPlayButton &&
                    this.props.renderPlayPauseButton(this._togglePlay, isPlaying)
                }

                {
                    this._canNavigate() ?
                        [
                            this.props.showNav &&
                            <span key='navigation'>
                  {this.props.renderLeftNav(slideLeft, !this._canSlideLeft())}
                                {this.props.renderRightNav(slideRight, !this._canSlideRight())}
                </span>,

                            <Swipeable
                                className='image-gallery-swipe'
                                key='swipeable'
                                delta={0}
                                onSwiping={this._handleSwiping}
                                onSwiped={this._handleOnSwiped}
                            >
                                <div className={css.imageGallerySlides}>
                                    {slides}
                                </div>
                            </Swipeable>
                        ]
                        :
                        <div className={css.imageGallerySlides}>
                            {slides}
                        </div>
                }
                {
                    this.props.showBullets &&
                    <div className={css.imageGalleryBullets}>
                        <div
                            className={css.imageGalleryBulletsContainer}
                            role='navigation'
                            aria-label='Bullet Navigation'
                        >
                            {bullets}
                        </div>
                    </div>
                }
                {
                    this.props.showIndex &&
                    <div className={css.imageGalleryIndex}>
              <span className={css.imageGalleryIndexCurrent}>
                {this.state.currentIndex + 1}
              </span>
                        <span className={css.imageGalleryIndexSeparator}>
                {this.props.indexSeparator}
              </span>
                        <span className={css.imageGalleryIndexTotal}>
                {this.props.items.length}
              </span>
                    </div>
                }
            </div>
        );

        const classNames = [
            css.imageGallery,
            this.props.additionalClass,
            modalFullscreen ? css.fullscreenModal : '',
        ].filter(name => typeof name === 'string').join(' ');

        return (
            <div
                ref={i => this._imageGallery = i}
                className={classNames}
                aria-live='polite'
            >

                <div
                    className={[css.imageGalleryContent, isFullscreen ? css.fullscreen : null].join(' ')}
                >

                    {
                        (thumbnailPosition === 'bottom' || thumbnailPosition === 'right') &&
                        slideWrapper
                    }
                    {
                        this.props.showThumbnails &&
                        <div
                            className={[css.imageGalleryThumbnailsWrapper, css[thumbnailPosition], !this._isThumbnailVertical() && isRTL ? css.thumbnailsWrapperRtl : null].join(' ')}
                            style={this._getThumbnailBarHeight()}
                        >
                            <div
                                className={css.imageGalleryThumbnails}
                                ref={i => this._thumbnailsWrapper = i}
                            >
                                <div
                                    ref={t => this._thumbnails = t}
                                    className={css.imageGalleryThumbnailsContainer}
                                    style={thumbnailStyle}
                                    aria-label='Thumbnail Navigation'
                                >
                                    {thumbnails}
                                </div>
                            </div>
                        </div>
                    }
                    {
                        (thumbnailPosition === 'top' || thumbnailPosition === 'left') &&
                        slideWrapper
                    }

                </div>

            </div>
        );
    }
}