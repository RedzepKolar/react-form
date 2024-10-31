function CustomInput({labelName, ...props}) {
    return (
        <div className="form-group mb-3">
            <label className="form-label text-center ">{labelName}</label>
            <input className="form-control" {...props}/>
        </div>
            )
}

export default CustomInput;