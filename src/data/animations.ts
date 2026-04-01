import video1 from '../assets/animations/vid1.mp4';
import video2 from '../assets/animations/vid2.mp4';
import video3 from '../assets/animations/vid3.mp4';
import video4 from '../assets/animations/vid4.mp4';
import video5 from '../assets/animations/vid5.mp4';
import video6 from '../assets/animations/vid6.mp4';
import video7 from '../assets/animations/vid7.mp4';
import video8 from '../assets/animations/vid8.mp4';
import video9 from '../assets/animations/vid9.mp4';

export interface AnimationData {
    title: string;
    description: string;
    videoUrl: string;
}

export const animation1D: AnimationData[] = [
    {
        title: "Evolución Rápida",
        description: "Dispersión en Grafeno Prístino sin número de onda inicial y sin interacción espín-órbita tipo Rashba (SOIR)",
        videoUrl: video1
    },
    {
        title: "Reflexión Total",
        description: "Caso de estudio en donde la resonancia dentro de la caja produce una transmisión ANTI-Klein (Con presencia de SOIR)",
        videoUrl: video2
    }
];

export const animation2D: AnimationData[] = [
    {
        title: "Pseudospin = (1,0) (low-res)",
        description: "Se observa el paquete formando ondas similares a las de agua esparciéndose, con 2 \"picos“ dirigiéndose en ambos sentidos de \"y\"",
        videoUrl: video4
    },
    {
        title: "Pseudospin = (1,0) (low-res)",
        description: "Paquete dispersándose a lo largo de \"x“ y de \"y\" simultáneamente, formando una especie de cilindro",
        videoUrl: video5
    },
    {
        title: "Pseudospin = (1,1) (low-res)",
        description: "Se forma también parte del cilindro, pero sobre \"x\" se ve que de un lado no tiene altura",
        videoUrl: video6
    },
    {
        title: "Pseudospin = (1,i) (low-res)",
        description: "Ahora el paquete se dispersa sólo en un sentido",
        videoUrl: video7
    },
    {
        title: "Pseudospin = (1,e^(i * pi / 4)) (low-res)",
        description: "La dispersión ocurre en forma de luna menguante, cargada en una direccción y sentido",
        videoUrl: video8
    },
    {
        title: "Pseudospin = (1,0) (HIGH-res)",
        description: "Al ser de alta resolución, no se aprecia tanto la dispersión, se necesita una caja más grande",
        videoUrl: video9
    }
];

export const animationComplementary: AnimationData[] = [
    {
        title: "Representación visual del método de diferencias finitas para el caso de propagación en 2D",
        description: "Una vez que el espacio se ha recorrido, empieza de nuevo desde el punto inicial, y se repite el proceso para cada paso en el tiempo.",
        videoUrl: video3
    }
];
