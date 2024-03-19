import './Canvas.scss'
import CPULogic from './componentLogic/CPULogic'
import CoolingLogic from './componentLogic/CoolingLogic'
import GPULogic from './componentLogic/GPULogic'
import MotherboardLogic from './componentLogic/MotherboardLogic'
import PWLogic from './componentLogic/PWLogic'
import RAMLogic from './componentLogic/RAMLogic'
import StorageLogic from './componentLogic/StorageLogic'

const Collection = (props) => {

    const selectCase = () => {
        if (cases == CASE_SIZE.L)
            true
        else if (cases == CASE_SIZE.M)
            true
        else if (cases == CASE_SIZE.S)
            true
    }

    return (
        <>
            <section className="side-pan">
                <MotherboardLogic />
            </section>
            <section className='side-pan'>
                <CPULogic />
            </section>
            <section className="side-pan">
                <GPULogic />
            </section>
            <section className="side-pan">
                <RAMLogic />
            </section>
            <section className="side-pan">
                <StorageLogic />
            </section>
            <section className="side-pan">
                <CoolingLogic />
            </section>
            <section className="side-pan">
                <PWLogic />
            </section>
        </>
    )
}


export default Collection