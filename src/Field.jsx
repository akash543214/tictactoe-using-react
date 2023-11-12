

function Field({dataindex,val})
{
    return (
        <div className="field" data-index={dataindex}>{val}</div>
    )
}

export default Field