type Prop = {
  readonly title: string,
  readonly artist: string
}

const Song = ({title, artist} : Prop) =>{
  <div>
    {title} by {artist}
  </div>
}

export default Song