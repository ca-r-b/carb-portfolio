const TechInfo = ({
    title="Title",
    content
}) => {

    return (
        <div className="flex flex-col gap-3">
            <div>
                <h2 className="text-[80%] text-white">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {content}
            </div>
        </div>
    )
}

export default TechInfo