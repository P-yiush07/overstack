interface QCardProps {
    title: string;
    description: string;
}

const Qcard: React.FC<QCardProps> = ({ title, description }) => {
    return (
        <div className="w-[80%] bg-white rounded-lg shadow-lg p-6 mx-auto my-10">
            <div className="font-bold mb-2">{title}</div>
            <div className="text-gray-700">{description}</div>
        </div>


    )
}
export default Qcard;