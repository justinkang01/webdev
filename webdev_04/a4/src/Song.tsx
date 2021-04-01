type Props = {
  readonly title: string,
  readonly artist: string
}

const Song = ({title, artist} : Props) => (
  <div>
    {title} by {artist}
  </div>
);

export default Song;