import {useState} from 'react'
import cs from 'classnames'
import _ from 'lodash'
import s from './index.module.scss'

interface Props {
    progress?:number,
    onInstall?: () => void,
    onSuccess?: () => void
}
function ProgressButton({progress, onInstall, onSuccess}: Props) {
    progress = _.isNumber(progress) ? progress > 100 ? 100 : progress : 0;
    if (progress === 100) {onSuccess && onSuccess()}
    let width = Math.floor((progress / 100) * 250);

    return <div className={s.progressButtonContainer} onClick={onInstall}>
        <div className={cs(s.progress, s.uninstall)}>{progress === 0 ? '安装' : progress === 100 ? '安装完成' : `正在安装${progress}%`}</div>
        <div className={cs(s.install)} style={{width: width}}>
            <div className={cs(s.progress)}>{progress === 0 ? '安装' : progress === 100 ? '安装完成' : `正在安装${progress}%`}</div>
        </div>
    </div>
}

export default ProgressButton;