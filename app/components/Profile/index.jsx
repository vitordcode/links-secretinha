export const Profile = (props) => {
  return (
    <div className='w-full flex flex-col items-center'>
      <img
        src={props.profileImage}
        className="w-20 h-20 rounded-full"
        alt="Logo Secretinha"
      />
      <span className="font-light text-white pt-3">
        {props.arroba}
      </span>
    </div>
  )
}
