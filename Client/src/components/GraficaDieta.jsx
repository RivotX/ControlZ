import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/custom.css';

const Grafica = () => {
    let percentage = 70;
    return (
        <div className="tw-relative sm:tw-text-lg md:tw-w-64 md:tw-h-64 md:tw-text-5xl"> {/* Contenedor para la gráfica */}
            <CircularProgressbar
                value={percentage}
                text={""} // No necesitamos el texto aquí
                className="custom-text" // Aplica una clase CSS para el contenedor del texto

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
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: 'white',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />
            <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center text-container">
                <div className="text-number tw-font-bold">579</div>
                <div className="text-calories tw-text-sm sm:tw-text-xl">Calorías</div>
            </div>
        </div>
    );
};

export default Grafica;
