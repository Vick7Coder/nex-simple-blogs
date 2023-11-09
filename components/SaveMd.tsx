import React, { useEffect, useState } from 'react'

export const SaveList = ({ list }: any) => {
    // set up local state for generating the download link
    const [downloadLink, setDownloadLink] = useState('')

    // function for generating file and set download link
    const makeTextFile = () => {
        // This creates the file. 
        // In my case, I have an array, and each item in 
        // the array should be on a new line, which is why
        // I use .join('\n') here.
        const data = new Blob([list?.join('\n')])
        console

        // this part avoids memory leaks
        if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)

        // update the download link state
        setDownloadLink(window.URL.createObjectURL(data))
    }

    // Call the function if list changes
    useEffect(() => {
        makeTextFile()
    }, [list])

    return (
        <a
            className="w-24 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            // this attribute sets the filename
            download='nex-markdown-file.md'
            // link to the download URL
            href={downloadLink}
        >
            download
        </a>
    )
}

export default SaveList