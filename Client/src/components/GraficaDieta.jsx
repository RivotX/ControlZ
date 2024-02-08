import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Grafica = () => {
    let percentage = 70;
    return (
        <div className="tw-absolute sm:tw-text-xl tw-w-36 tw-h-36 sm:tw-w-52 sm:tw-h-52 md:tw-text-5xl fold"> {/* Contenedor para la gráfica */}
            <CircularProgressbar
                value={percentage}
                text={""}
                className=""

                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size


                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62,152,199, ${percentage / 100})`, 
                    textColor: 'white',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#334155',
                })}
            />
            <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center">
                <div className="text-container tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center">

                    <div className="text-number tw-font-bold sm:tw-text-2xl">579</div>
                    <div className="text-calories tw-text-sm sm:tw-text-xl">Calorías <span className='tw-text-green-500'>restantes</span></div>
                </div>
            </div>

        </div>
    );
};

export default Grafica;
