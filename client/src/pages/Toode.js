import { useParams } from "react-router-dom"

export function Toode() {
  const { id } = useParams()
  return <h1>Toode {id}</h1>
}
