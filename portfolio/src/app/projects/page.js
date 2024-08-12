import Imrs from "./imrs"
import Jules from "./jules"

const Projects = () => {
    return (
        <div className="min-h-screen">
            <h1 className="pt-20 text-center text-4xl">My recent works</h1>
            <div className="min-h-screen flex flex-row p-16 items-center justify-center space-x-4">
                <div className="">
                    <Imrs />
                </div>
                <div>
                    <Jules />
                </div>
            </div>
        </div>

    )
}

export default Projects