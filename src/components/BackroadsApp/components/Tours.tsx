import {Title} from "./Title";
import {tours} from "../data/data";
import { TourArticle } from "./TourArticle";

export const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title={'featured'} subtitle={'tours'}/>

            <div className="section-center featured-center">
                {tours.map((tour) =>{
                    return <TourArticle key={tour.id} {...tour}/>
                })}
            </div>
        </section>
    );
}