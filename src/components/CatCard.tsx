import Image from 'next/image'
import Link from 'next/link'

type Props = {
    id: string;
    src: {
      url: string;
      height: number;
      width: number;
    };
}

export default function CatCard({id, src}: Props) {
  return (
    <div>
        <Image src={src.url} alt="Gato" width={src.width} height={src.height} priority={false}/>
        <Link href={`/${id}`}>Ir a perfil</Link>
    </div>
  )
}