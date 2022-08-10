import React, {useEffect} from "react";

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle;