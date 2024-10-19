

 const Loading = ({color="white"}) => {
  return (
    <div class="flex justify-center pt-20 h-screen">
<div class="flex flex-row gap-2 pb-20">
  <div class="w-14 h-14 rounded-full bg-pink-800 animate-bounce"></div>
  <div class="w-14 h-14 rounded-full bg-pink-800 animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-14 h-14 rounded-full bg-pink-800 animate-bounce [animation-delay:-.5s]"></div>
</div>
</div>
  );
};

export default Loading;