import { useParams } from "react-router-dom"

export default function ReadById() {
    const { id } = useParams()

    const apiUrl = `https:/rickandmorthyapi.com/api/character/${id}`

    return <div>ReadById: {id}</div>
}