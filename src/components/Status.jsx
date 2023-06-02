function Status(props) {
    if (props.correct) {
        return (
            <h2 className="text-lg text-green-500 mt-12 font-bold text-center">
                صحيح!
            </h2>
        );
    }

    return (
        <h2 className={`text-lg text-red-500 mt-12 font-bold text-center`}>
            خطأ!
        </h2>
    );
}

export default Status;
