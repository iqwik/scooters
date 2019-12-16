import React from 'react';

import dialog_css from '../../assets/css/Dialog.css';

export class Dialog extends React.Component
{
    fadeIn(e)
    {
        if (e)
        {
            setTimeout(() => { e.style.opacity = 1; }, 10);
        }
    }

    render()
    {
        const css = this.props.theme || dialog_css;
        return (<div className={css.overlay+(this.props.overlayCls ? ' '+this.props.overlayCls : '')} ref={this.fadeIn}>
            <div className={css.dialog+(this.props.dialogCls ? ' '+this.props.dialogCls : '')}>
                {this.props.hasClose
                    ? <div className={css.close} onClick={this.props.onClose}>
                    <span>&times;</span>
                </div>
                    : null}
                {this.props.children}
            </div>
        </div>);
    }

    componentDidMount()
    {
        if (this.props.onEscKeyDown)
        {
            document.body.addEventListener('keydown', this.handleEscKey);
        }
    }

    componentWillUnmount()
    {
        if (this.props.onEscKeyDown)
        {
            document.body.removeEventListener('keydown', this.handleEscKey);
        }
    }

    handleEscKey = (e) =>
    {
        if (this.props.onEscKeyDown && e.which === 27)
        {
            this.props.onEscKeyDown(e);
        }
    }
}
