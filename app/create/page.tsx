import { writeFile } from 'fs/promises'
import path, { join } from 'path'

export default function ServerUploadPage() {
    async function upload(data: FormData) {
        'use server'
        const UPLOAD_FOLDER = path.join('D:', 'teaching', 'blogs-app', 'mocks')

        const file: File | null = data.get('file') as unknown as File

        if (!file) {
            throw new Error('No file uploaded')
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // With the file data in the buffer, you can do whatever you want with it.
        // For this, we'll just write it to the filesystem in a new location
        const filePath = path.join(UPLOAD_FOLDER, file.name)
        await writeFile(filePath, buffer)
        console.log(`open ${path} to see the uploaded file`)

        return { success: true }
    }

    return (
        <main>
            <h1>Post A Blog!</h1>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' action={upload}>
                <input type="file" name="file" />
                <input className="shadow bg-green-700 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Upload" />
            </form>
        </main>
    )
}