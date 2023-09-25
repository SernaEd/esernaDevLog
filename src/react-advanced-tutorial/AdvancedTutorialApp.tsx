import "./index.css"
import {UseEffectFetch} from "./components/UseEffectFetch";
export const AdvancedTutorialApp = () => {
    return (
        <div className={'container'}>
            {/*<Setup/>*/}
            {/*<UseStateObject/>*/}
            {/*<UseStateCounter/>*/}
            {/*<UseEffectBasics/>*/}
            {/*<UseEffectCleanup/>*/}
            <UseEffectFetch/>
        </div>
    );
}