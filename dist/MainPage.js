import React from 'react';

import { PATH, CONTACTS, MODELS, COLORS, COLORS_CODES, DESC, STOCK } from '../entries.js';
import bindCache from './inc/bind-cache.js';

import { LoadingOverlay } from "./inc/LoadingOverlay.js";
import { Gallery } from './inc/Gallery.js';
import { Dialog } from './inc/Dialog.js';

import css from '../assets/css/App.css';
import dialog_css from '../assets/css/Dialog.css'
import cont_css from '../assets/css/Contacts.css';
import logo from '../assets/img/logo.png';

export class MainPage extends React.PureComponent
{
    state = {
        loading: true,
        navLinks: [],
        current_link: null,
        model: {},
        modify: [],
        current_modify: null,
        current_color: null,
        colors: [],
        show_dialog: { contacts: false, about: false },
        show_gallery: false,
    }

    setData()
    {
        let navLinks = Object.keys(MODELS);
        let current_link = window.location.hash.slice(1)||null;
        let params = {};

        if (current_link)
        {
            const model = MODELS[current_link];
            const modify = Object.keys(model.modify);
            const current_modify = modify[0];
            const colors = Object.keys(model.modify[current_modify].colors);
            const current_color = model.modify[current_modify].def_color;

            params = { navLinks, model, current_link, modify, current_modify, current_color, colors };
        }
        else
        {
            params = { navLinks };
        }

        this.setState({ ...params, loading: false });
    }

    setDialog = (k, v) =>
    {
        const show_dialog = { ...this.state.show_dialog, [k]: v };
        this.setState({ show_dialog });
    }

    onClickNavLink = (current_link) =>
    {
        const loading = true;
        const model = MODELS[current_link];
        const modify = Object.keys(model.modify);
        const current_modify = modify[0];
        const colors = Object.keys(model.modify[current_modify].colors);
        const current_color = model.modify[current_modify].def_color;
        this.setState({ model, current_link, modify, current_modify, current_color, colors, loading });
    }

    onChangeColor = (current_color) =>
    {
        this.setState({ current_color, loading: true })
    }

    onChangeModify = (current_modify) =>
    {
        const loading = true;
        const colors = Object.keys(this.state.model.modify[current_modify].colors);
        const current_color = this.state.model.modify[current_modify].def_color;
        this.setState({ loading, current_modify, current_color, colors });
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

    onCallManager = (e) =>
    {}

    renderNav()
    {
        let r = [];
        for (let el of this.state.navLinks)
        {
            let item = MODELS[el];
            if (item.active)
            {
                r.push(<li key={el}>
                    <a
                        href={'#'+item.name}
                        className={[css.navlink, this.state.current_link === item.name ? css.boldRed : null].join(' ')}
                        onClick={this.bind('onClickNavLink', item.name)}>
                        {item.name}
                    </a>
                </li>);
            }
        }
        return r;
    }

    renderModels()
    {
        let r = [];
        for (let el of this.state.navLinks)
        {
            let item = MODELS[el];
            if (item.active)
            {
                let modify = Object.keys(item.modify)[0];
                let def_color = item.modify[modify].def_color;
                let img = item.modify[modify].colors[def_color].poster;

                let poster = PATH.ImgModels+item.name+'/'+modify+'/'+def_color+'/'+img;

                r.push(<li key={el} className={css.flexItemFour}>
                    <a href={'#'+item.name} onClick={this.bind('onClickNavLink', item.name)}>
                        <img className={css.imgPoster} src={poster} alt={item.name+' '+modify} />
                        <span className={css.linkModel}>{item.name}</span>
                    </a>
                </li>);
            }
        }
        return r;
    }

    renderModelsList()
    {
        return (<div className={css.container}><ul className={[css.ulReset,css.dFlex,css.flexWrap].join(' ')}>{this.renderModels()}</ul></div>);
    }

    renderModelDescription()
    {
        let r = [];
        let desc = this.state.model.modify[this.state.current_modify].description;
        let desc_array = Object.keys(this.state.model.modify[this.state.current_modify].description);
        for (let row of desc_array)
        {
            r.push(<li key={row} className={css.paramText}><p>{DESC[row] ? DESC[row]+": "+desc[row] : desc[row]}</p></li>);
        }
        return r;
    }

    renderModel()
    {
        const img_name = this.state.model.modify[this.state.current_modify].colors[this.state.current_color].poster;
        const poster = this.state.model.name+'/'+this.state.current_modify+'/'+this.state.current_color+'/'+img_name;
        return (<div className={css.container+' '+css.body+' '+css.dFlex}>
            <nav className={css.navigationMob}><ul className={css.nav}>{this.renderNav()}</ul></nav>
            <div className={css.side+' '+css.sideFirst}>
                <h1 className={css.h1}>{this.state.model.name}</h1>
                <div className={css.nameBg}></div>
                <ul className={css.linkList}>
                    <li><a href={PATH.PriceList}>Скачать прайс модели</a></li>
                    <li><a href={PATH.PriceList}>Скачать прайс<br/>запчастей и аксессуаров</a></li>
                </ul>
            </div>
            <div className={css.side}>
                <div className={css.nameBg}>
                    <span className={css.NameBgAbsolute+' '+css.mTop}>
                        {this.state.model.name}
                    </span>
                    {this.state.loading ? <LoadingOverlay /> : (this.state.show_gallery ? <Gallery
                        //loading={this.state.loading}
                        //onload={this.onLoading}
                        gallery={this.state.model.modify[this.state.current_modify].colors[this.state.current_color].gallery}
                        path={PATH.ImgModels+this.state.model.name+'/'+this.state.current_modify+'/'+this.state.current_color}
                    /> : null) }
                </div>
            </div>
            <div className={css.side+' '+css.mTop}>
                <ul className={css.modifyBlock+' '+css.stock+' '+css.dFlex}>
                    {this.state.model.modify[this.state.current_modify].stock === 'in'
                        ? <li className={css.modifyElement+' '+css.red+' '+css.stockFont}>
                            <span style={{ position: 'relative' }}>
                                {STOCK[this.state.model.modify[this.state.current_modify].stock]}
                                <span className={css.inStock}></span>
                            </span>
                        </li>
                        : <li className={css.modifyElement+' '+css.stockFont}>
                            <span style={{ position: 'relative' }}>
                                {STOCK[this.state.model.modify[this.state.current_modify].stock]}
                                <span className={css.outStock}>&times;</span>
                            </span>
                            <a href={'tel:'+CONTACTS.tel.href}
                                className={css.callBtnText+' '+css.boldRed+' '+css.stockLink}
                                onClick={this.onCallManager}>
                                Связаться с менеджером
                            </a>
                        </li>}
                </ul>
                <ul className={css.colorsBlock+' '+css.dFlex+' '+css.flexWrap}>{this.renderColors()}</ul>
                {this.state.modify.length && this.state.modify[0] !== '1'
                    ? <ul className={css.modifyBlock+' '+css.dFlex}>{this.renderModify()}</ul> : null}
                {Object.keys(this.state.model.modify[this.state.current_modify].description).length
                    ? <ul className={css.paramsBlock}>{this.renderModelDescription()}</ul> : null}
                {this.state.model.modify[this.state.current_modify].price
                    ? <ul className={css.modifyBlock+' '+css.price+' '+css.dFlex}>
                          <li className={css.modifyElement} style={{cursor: 'default', fontWeight: 'bold'}}>{this.state.model.modify[this.state.current_modify].price}</li>
                      </ul>
                    : <p className={css.price}></p>}
                <div className={css.callBtn+' '+css.dFlex+' '+css.mobHide}>
                    <a href="#" className={css.callBtnText+' '+css.boldRed} onClick={this.onClickEmail}>Написать нам</a>
                    <a href="#" className={css.callBtnText+' '+css.boldRed} onClick={this.onClickCall}>Позвонить нам</a>
                </div>
            </div>
        </div>);
    }

    renderColors()
    {
        let r = [];
        for (let el of this.state.colors)
        {
            r.push(<li key={el}
                style={{backgroundColor: COLORS_CODES[el], border: this.renderBorder(el) }}
                className={css.colorCircle}
                onClick={this.bind('onChangeColor', el)}>
                <span className={css.colorText}>{COLORS[el]}</span>
            </li>);
        }
        return r;

    }

    renderModify()
    {
        let r = [];
        for (let el of this.state.modify)
        {
            r.push(<li key={el}
                className={[css.modifyElement, el === this.state.current_modify ? css.red : null].join(' ')}
                onClick={this.bind('onChangeModify', el)}>
                {el === '1' ? null : el}
            </li>);
        }
        return r;
    }

    renderBorder(el)
    {
        return this.state.current_color === el
            ? "3px solid #555555"
            : "3px solid "+(COLORS_CODES[el] === '#ffffff' ? '#f0f0f0' : COLORS_CODES[el]);
    }

    renderAboutRows()
    {
        let r = [];
        for (let i in CONTACTS.about)
        {
            r.push(<p key={i}>{CONTACTS.about[i]}</p>);
        }
        return r;
    }

    renderAbout()
    {
        return (<Dialog
            onEscKeyDown={this.bind('setDialog', 'about', false)}
            theme={dialog_css}>
            <div>
                <div className={dialog_css.close} onClick={this.bind('setDialog', 'about', false)}>
                    <span>&times;</span>
                </div>
                <div className={css.dFlex+' '+cont_css.contactsBlock}>
                    <div className={cont_css.leftBlock+' '+cont_css.aboutBG+' '+css.flexItem}></div>
                    <div className={[
                        cont_css.info,
                        cont_css.contactsMiddleBlock,
                        css.flexItem,
                        css.dFlex,
                        css.flexDirectionColumn,
                        css.alignItemsCenter,
                        css.justifyContentCenter].join(' ')}>
                        <div className={cont_css.infoAll}>
                            <h4>Информация о нас:</h4>
                            <div className={cont_css.infoP}>{this.renderAboutRows()}</div>
                        </div>
                    </div>
                    <div className={cont_css.contactsRightBlock}></div>
                </div>
            </div>
        </Dialog>)
    }

    renderContacts()
    {
        return (<Dialog
            onEscKeyDown={this.bind('setDialog', 'contacts', false)}
            theme={dialog_css}>
            <div>
                <div className={dialog_css.close} onClick={this.bind('setDialog', 'contacts', false)}>
                    <span>&times;</span>
                </div>
                <div className={css.dFlex+' '+cont_css.contactsBlock}>
                    <div className={cont_css.leftBlock+' '+cont_css.contactsBG+' '+css.flexItem}></div>
                    <div className={[
                        cont_css.info,
                        cont_css.contactsMiddleBlock,
                        css.flexItem,
                        css.dFlex,
                        css.flexDirectionColumn,
                        css.alignItemsCenter,
                        css.justifyContentCenter].join(' ')}>
                        <div className={cont_css.infoAll}>
                            <h4>Заказ и сотрудичество:</h4>
                            <ul>
                                <li><a href={"tel:"+CONTACTS.tel.href}>{CONTACTS.tel.num}</a></li>
                                <li><a href={"mailto:"+CONTACTS.email}>{CONTACTS.email}</a></li>
                            </ul>
                            <h4>Адреса магазинов:</h4>
                            <ul>
                                {CONTACTS.address.length > 1
                                    ? CONTACTS.address.map((el, idx) => <li key={idx}>{el}</li>)
                                    : <li>{CONTACTS.address[0]}</li>}
                            </ul>
                            {CONTACTS.yaMap.src ?
                                <iframe
                                    src={CONTACTS.yaMap.src}
                                    width={CONTACTS.yaMap.width||"100%"}
                                    height={CONTACTS.yaMap.height||"400"}
                                    frameBorder={CONTACTS.yaMap.height||"0"}>
                                </iframe>
                                : null}
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
            <div className={[css.wrapper, this.state.current_link ? css.modelBg : css.listBg].join(' ')}>
                <header className={css.header}>
                    <div className={[css.container,css.dFlex,css.alignItemsCenter,css.justifyContentSpaceBetween].join(' ')}>
                        <div className={css.navBlock+' '+css.dFlex+' '+css.alignItemsCenter}>
                            <a href={PATH.Root} className={css.logoLink} onClick={this.bind('onClickNavLink', null)}>
                                <img src={logo} alt="logo" />
                            </a>
                            {this.state.current_link
                                ? <nav className={css.navigationDesc}><ul className={css.nav}>{this.renderNav()}</ul></nav>
                                : null}
                        </div>
                        <ul className={css.contacts+' '+css.dFlex+' '+css.ulReset}>
                            <li onClick={this.bind('setDialog', 'about', true)}><nobr>О нас</nobr></li>
                            <li onClick={this.bind('setDialog', 'contacts', true)}>Контакты</li>
                        </ul>
                    </div>
                </header>
                {this.state.current_link ? this.renderModel() : this.renderModelsList()}
                <div className={css.descHide+' '+css.greyBgHoriz}>
                    {this.state.current_link ? <ul className={css.linkList}>
                        <li><a href={PATH.PriceList}>Скачать прайс модели</a></li>
                        <li><a href={PATH.PriceList}>Скачать прайс<br/>запчастей и аксессуаров</a></li>
                    </ul> : null}
                    <ul className={css.linkList}>
                        <li className={css.contactsMob} onClick={this.bind('setDialog', 'about', true)}><nobr>О нас</nobr></li>
                        <li className={css.contactsMob} onClick={this.bind('setDialog', 'contacts', true)}>Контакты</li>
                    </ul>
                    {this.state.current_link ? <div className={css.callBtn+' '+css.dFlex}>
                        <a href="#" className={css.callBtnText+' '+css.boldRed} onClick={this.onClickEmail}>Написать нам</a>
                        <a href="#" className={css.callBtnText+' '+css.boldRed} onClick={this.onClickCall}>Позвонить нам</a>
                    </div> : null}
                </div>
                {this.state.show_dialog.about ? this.renderAbout() : null}
                {this.state.show_dialog.contacts ? this.renderContacts() : null}
            </div>
        </React.Fragment>);
    }

    componentDidMount()
    {
        this.setData();
        // setTimeout(() => this.onLoading(false), 350);
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.show_dialog !== this.state.show_dialog)
        {
            document.querySelector('body').style.overflowY = this.state.show_dialog.about || this.state.show_dialog.contacts ? "hidden" : "auto";
        }

        if (prevState.loading !== this.state.loading && this.state.current_link)
        {
            this.setState({ loading: false, show_gallery: true });
            // setTimeout(() => this.setState({ loading: false, show_gallery: true }), 350);
        }
    }

    bind = bindCache(this);
}