const RightEditMode = (key, Name) => {
    return <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
    </label>
}

const RightReadMode = ({name}) => {
    return <label>{name}</label>
}

const HaveNotRigth = (props) => {
    return <label>aucun droits</label>
}
const RigthsReadMode = (props) => {
    return (
        
        <table>
            <thead>
        <tr>
            <th>
                Nom
            </th>
        </tr>
    </thead>
            <tbody>
                {(props.rigths.length > 0) ?

                        props.rigths.map((rigth, key) => {
                            return <tr key={key}>
                                <td>
                                    <RightReadMode  {...props} name={rigth} ></RightReadMode>
                                </td>
                            </tr>
                        })
                    :
                    <HaveNotRigth />
                }
        </tbody>
    </table >)
}

export default RigthsReadMode