import { InfinitySpin } from  'react-loader-spinner'
export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <InfinitySpin 
        width='200'
        color="#f3f4f6"
      />
    </div>
  );
}