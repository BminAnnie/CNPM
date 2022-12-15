import React from "react";

const User = () => {
  return (
    <div>
      <div class="bg-grey-lighter flex-1 overflow-auto">
        <div class="px-3 flex items-center bg-grey-light cursor-pointer">
          <div>
            <img
              class="h-12 w-12 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            />
          </div>
          <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
            <div class="flex items-bottom justify-between">
              <p class="text-grey-darkest">Collector A</p>
              <p class="text-xs text-grey-darkest">12:52</p>
            </div>
            <p class="text-grey-dark mt-1 text-sm">Message Content</p>
          </div>
        </div>
        <div class="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
          <div>
            <img
              class="h-12 w-12 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            />
          </div>
          <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
            <div class="flex items-bottom justify-between">
              <p class="text-grey-darkest">Janitor B</p>
              <p class="text-xs text-grey-darkest">12:30</p>
            </div>
            <p class="text-grey-dark mt-1 text-sm">Message Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
