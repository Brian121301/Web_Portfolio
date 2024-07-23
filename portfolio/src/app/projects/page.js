import Imrs from "./imrs"
import Jules from "./jules"

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-row bg-blue-100 p-16 items-center justify-center space-x-4">
            <div className="bg-black">
                <Imrs />
            </div>
            <div>
                <Jules />
            </div>
        </div>
    )
}

export default Projects