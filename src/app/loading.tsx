import Image from 'next/image';
export default function LoadingIndicator() {
  return (
    <div className="loader">
      <Image src="/spinner.gif" id="spinner" alt="spinner" width={50} height={50} />
    </div>
  );
}
