import "./index.css"
import {UseEffectCleanup} from "./components/UseEffectCleanup";
export const AdvancedTutorialApp = () => {
    return (
        <div className={'container'}>
            {/*<Setup/>*/}
            {/*<UseStateObject/>*/}
            {/*<UseStateCounter/>*/}
            {/*<UseEffectBasics/>*/}
            <UseEffectCleanup/>
        </div>
    );
}