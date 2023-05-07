import React, {FC} from "react";

type ContactType = {
    contactTitle: string,
    contactValue?: string | null
}


const Contact: FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div><b>{contactTitle}: </b> {contactValue}</div>
    )
}

export default Contact