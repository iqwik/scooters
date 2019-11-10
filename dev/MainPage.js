import React from 'react';
// import { Link } from 'react-router-dom';

import { PATH, CONTACTS, MODELS, COLORS, COLORS_CODES } from '../entries.js';
import bindCache from './inc/bind-cache.js';

import { LoadingOverlay } from "./inc/LoadingOverlay.js";
import { Gallery } from './inc/Gallery.js';
import { Dialog } from './inc/Dialog.js';

import css from './css/App.css';
import dialog_css from './css/Dialog.css'
import cont_css from './css/Contacts.css';
import image_css from './css/ImageGallery.css';
import logo from './img/logo.png';

export class MainPage extends React.PureComponent
{
    state = {
        loading: true,
        navLinks: [],
        default_link: null,
        current_link: null,
        model: {},
        modify: [],
        current_modify: null,
        current_color: null,
        colors: [],
        show_dialog: { contacts: false, gallery: false },
        tooltip: { is_show: false, text: 'нажмите для просмотра' },
    }

    setData()
    {
        // const loading = false;
        const navLinks = Object.keys(MODELS);
        const default_link = navLinks[0];
        const current_link = window.location.hash ? window.location.hash.slice(1) : default_link;
        const model = MODELS[current_link];
        const modify = Object.keys(model.modify);
        const current_modify = modify[0];
        const colors = Object.keys(model.modify[current_modify].colors);
        const current_color = model.modify[current_modify].def_color;
        this.setState({ navLinks, model, default_link, current_link, modify, current_modify, current_color, colors });
    }

    setDialog = (k, v) =>
    {
        const show_dialog = { ...this.state.show_dialog, [k]: v };
        this.setState({ show_dialog });
    }

    setTooltip = (v) =>
    {
        const tooltip = { ...this.state.tooltip, is_show: v };
        this.setState({ tooltip });
    }

    onLoading = (loading) =>
    {
        this.setState({ loading })
    }

    onClickNavLink = (current_link) =>
    {
        // const loading = true;
        const model = MODELS[current_link];
        const modify = Object.keys(model.modify);
        const current_modify = modify[0];
        const colors = Object.keys(model.modify[current_modify].colors);
        const current_color = model.modify[current_modify].def_color;
        this.setState({ model, current_link, modify, current_modify, current_color, colors });
    }

    onChangeColor = (current_color) =>
    {
        this.setState({ current_color })
    }

    onChangeModify = (current_modify) =>
    {
        const colors = Object.keys(this.state.model.modify[current_modify].colors);
        const current_color = this.state.model.modify[current_modify].def_color;
        this.setState({ current_modify, current_color, colors });
    }

    onClickEmail = (e) =>
    {
        e.preventDefault();
        console.log('emailing');
    }

    onClickCall = (e) =>
    {
        e.preventDefault();
        console.log('calling');
    }

    renderNav()
    {
        return this.state.navLinks.map((el, idx) => MODELS[el].active ? this.renderNavElement(MODELS[el], idx) : null);
    }

    renderNavElement = (el, idx) =>
    {
        return (<li key={idx}>
            <a href={'#'+el.name}
                className={[css.navlink, this.state.current_link === el.name ? css.boldRed : null].join(' ')}
                onClick={this.onClickNavLink.bind(this, el.name)}>
                {el.name}
            </a>
        </li>);
    }

    renderBorder(el)
    {
        return this.state.current_color === el
            ? "3px solid #555555"
            : "3px solid "+(COLORS_CODES[el] === '#ffffff' ? '#f0f0f0' : COLORS_CODES[el]);
    }

    renderModel()
    {
        const img_name = this.state.model.modify[this.state.current_modify].colors[this.state.current_color].poster;
        const poster = this.state.model.name+'/'+this.state.current_modify+'/'+this.state.current_color+'/'+img_name;
        return (<div className={css.container+' '+css.body+' '+css.dFlex}>
            <nav className={css.navigationMob}>
                <ul className={css.nav}>
                    {this.renderNav()}
                </ul>
            </nav>
            <div className={css.side+' '+css.sideFirst}>
                <h1 className={css.h1}>{this.state.model.name}</h1>
                <div className={css.nameBg}></div>
                <ul className={css.linkList}>
                    <li>
                        <div onClick={this.bind('setDialog', 'gallery', true)}>Галерея</div>
                    </li>
                    <li>
                        <a href={PATH.PriceList}>
                            Скачать прайс
                        </a>
                    </li>
                </ul>
            </div>
            <div className={css.side+' '+css.mTop}>
                <div className={css.nameBg}>
                    <span className={css.NameBgAbsolute}>
                        {this.state.model.name}
                    </span>
                    <img
                        src={PATH.ImgModels+poster}
                        alt={this.state.model.name+' '+this.state.current_modify}
                        className={css.modelPoster}
                        onClick={this.bind('setDialog', 'gallery', true)}
                        onMouseEnter={this.bind('setTooltip', true)}
                        onMouseLeave={this.bind('setTooltip', false)}
                    />
                    <button
                        className={image_css.imageGalleryFullscreenButton}
                        onClick={this.bind('setDialog', 'gallery', true)}>
                    </button>
                    {this.state.tooltip.is_show ? <span className={css.tooltip}>{this.state.tooltip.text}</span> : null}
                </div>
            </div>
            <div className={css.side+' '+css.mTop}>
                <ul className={css.colorsBlock+' '+css.dFlex+' '+css.flexWrap}>
                    {this.state.colors.map((el, idx) =>
                        <li key={idx}
                            style={{backgroundColor: COLORS_CODES[el], border: this.renderBorder(el) }}
                            className={css.colorCircle}
                            onClick={this.onChangeColor.bind(this, el)}>
                        <span className={css.colorText}>
                            {COLORS[el]}
                        </span>
                        </li>
                    )}
                </ul>
                <ul className={css.modifyBlock+' '+css.dFlex}>
                    {this.state.modify.map((el, idx) =>
                        <li key={idx}
                            className={[css.modifyElement, el === this.state.current_modify ? css.red : null].join(' ')}
                            onClick={this.onChangeModify.bind(this, el)}>
                            {el}
                        </li>
                    )}
                </ul>
                <ul className={css.paramsBlock}>
                    <li className={css.paramText}>
                        Мощность {this.state.model.modify[this.state.current_modify].power}
                    </li>
                    <li className={css.paramText}>
                        Скорость {this.state.model.modify[this.state.current_modify].speed}
                    </li>
                    <li className={css.paramText}>
                        Пробег {this.state.model.modify[this.state.current_modify].range}
                    </li>
                    <li className={css.paramText}>
                        {this.state.model.modify[this.state.current_modify].other}
                    </li>
                </ul>
                <div className={css.callBtn+' '+css.dFlex+' '+css.mobHide}>
                    <a
                        href="#"
                        className={css.callBtnText+' '+css.boldRed}
                        onClick={this.onClickEmail}>
                        Написать нам
                    </a>
                    <a
                        href="#"
                        className={css.callBtnText+' '+css.boldRed}
                        onClick={this.onClickCall}>
                        Позвонить нам
                    </a>
                </div>
            </div>
        </div>);
    }

    renderGallery()
    {
        return (<Dialog
            onEscKeyDown={this.bind('setDialog', 'gallery', false)}
            theme={dialog_css}>
            <div>
                <div className={dialog_css.close} onClick={this.bind('setDialog', 'gallery', false)}>
                    <span>&times;</span>
                </div>
            </div>
            <div style={{ maxWidth: '700px', margin: 'auto' }}>
                <Gallery
                    gallery={this.state.model.modify[this.state.current_modify].colors[this.state.current_color].gallery}
                    path={PATH.ImgModels+this.state.model.name+'/'+this.state.current_modify+'/'+this.state.current_color}
                />
            </div>
        </Dialog>)
    }

    renderContacts()
    {
        return (<Dialog
            onEscKeyDown={this.bind('setDialog', 'gallery', false)}
            theme={dialog_css}>
            <div>
                <div className={dialog_css.close} onClick={this.bind('setDialog', 'contacts', false)}>
                    <span>&times;</span>
                </div>
                <div className={css.dFlex+' '+cont_css.contactsBlock}>
                    <div className={cont_css.contactsLeftBlock+' '+css.flexItem}></div>
                    <div className={[
                        cont_css.info,
                        cont_css.contactsMiddleBlock,
                        css.flexItem,
                        css.dFlex,
                        css.flexDirectionColumn,
                        css.alignItemsCenter,
                        css.justifyContentCenter].join(' ')}>
                        <div>
                            <h4>Заказ и сотрудичество:</h4>
                            <ul>
                                <li>{CONTACTS.tel}</li>
                                <li>{CONTACTS.email}</li>
                            </ul>
                            <h4>Адреса магазинов:</h4>
                            <ul>
                                {CONTACTS.address.length > 1
                                    ? CONTACTS.address.map((el, idx) => <li key={idx}>{el}</li>)
                                    : <li>{CONTACTS.address[0]}</li>}
                            </ul>
                        </div>
                    </div>
                    <div className={cont_css.contactsRightBlock}></div>
                </div>
            </div>
        </Dialog>)
    }

    render()
    {
        return (<React.Fragment>
            {this.state.loading ? <LoadingOverlay /> : null}
            <div className={css.wrapper}>
                <header className={css.header}>
                    <div className={[css.container,css.dFlex,css.alignItemsCenter,css.justifyContentSpaceBetween].join(' ')}>
                        <div className={css.navBlock+' '+css.dFlex+' '+css.alignItemsCenter}>
                            <a
                                href={PATH.Root}
                                className={css.logoLink}
                                onClick={this.onClickNavLink.bind(this, this.state.default_link)}>
                                <img src={logo} alt="logo" />
                            </a>
                            <nav className={css.navigationDesc}>
                                <ul className={css.nav}>
                                    {this.renderNav()}
                                </ul>
                            </nav>
                        </div>
                        <div
                            className={css.contacts}
                            onClick={this.bind('setDialog', 'contacts', true)}>
                            Контакты
                        </div>
                    </div>
                </header>
                {!this.state.loading ? this.renderModel() : null}
                <div className={css.descHide+' '+css.greyBgHoriz}>
                    <ul className={css.linkList}>
                        <li>
                            <div onClick={this.bind('setDialog', 'gallery', true)}>Галерея</div>
                        </li>
                        <li>
                            <a href={PATH.PriceList}>
                                Скачать прайс
                            </a>
                        </li>
                    </ul>
                    <div className={css.callBtn+' '+css.dFlex}>
                        <a
                            href="#"
                            className={css.callBtnText+' '+css.boldRed}
                            onClick={this.onClickEmail}>
                            Написать нам
                        </a>
                        <a
                            href="#"
                            className={css.callBtnText+' '+css.boldRed}
                            onClick={this.onClickCall}>
                            Позвонить нам
                        </a>
                    </div>
                </div>
                {this.state.show_dialog.gallery ? this.renderGallery() : null}
                {this.state.show_dialog.contacts ? this.renderContacts() : null}
            </div>
        </React.Fragment>);
    }

    componentDidMount()
    {
        this.setData();
        setTimeout(() => this.onLoading(false), 350);
    }

    componentDidUpdate()
    {
        console.log(this.state);
    }

    bind = bindCache(this);
}