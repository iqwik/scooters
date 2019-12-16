import React from 'react';
import spin from '../../assets/css/spinner.css';

const IE = window && /MSIE |Trident\//.exec(window.navigator.userAgent);

const styleOverlay = {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255,0.75)',
    zIndex: 30
}

const styleSpinner = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-32px',
    marginLeft: '-32px',
    zIndex: 40
}

export class LoadingOverlay extends React.PureComponent
{
    render()
    {
        return (<div style={styleOverlay}>
            <div style={styleSpinner}>
                <svg
                    className={IE ? spin.simple_spinner : spin.spinner}
                    width="65px"
                    height="65px"
                    viewBox="0 0 66 66"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                        className={IE ? spin.simple_path : spin.spinner_path}
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round" cx="33" cy="33" r="30">
                    </circle>
                </svg>
            </div>
        </div>);
    }
}