import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import '../AboutOfFilm/aboutsOfFilm.css'
import '../../mode.css'


const Video: FC = () => {
    const {video} = useAppSelector(state => state.aboutOfFilm)
    const {mode} = useAppSelector(state => state.mode)
    return (
        <div className={'video'}>
            <p className={`trailer ${mode === 2 ? 'dark' : 'light'}`}>Trailer:</p>
            <div>
                {!video?<p>Trailer Not Found</p>:
                    <iframe
                        height={'500px'}
                        width={'700'}
                        src={`https://www.youtube.com/embed/${video}`}>

                    </iframe>
                }

            </div>

        </div>

    );
};

export {Video};