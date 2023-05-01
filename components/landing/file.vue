<template>
<div>
    <div class="flex justify-center">
        <div>
            <div class="dropdown relative">
                <button
                class="
                    dropdown-toggle
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg active:text-white
                    transition
                    duration-150
                    ease-in-out
                    flex
                    items-center
                    whitespace-nowrap
                "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Dropdown button
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    class="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                </svg>
                </button>
                <ul
                class="
                    dropdown-menu
                    min-w-max
                    absolute
                    hidden
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                "
                aria-labelledby="dropdownMenuButton1"
                >
                <li>
                    <a
                    class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                    "
                    href="#"
                    >Action</a
                    >
                </li>
                <li>
                    <a
                    class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                    "
                    href="#"
                    >Another action</a
                    >
                </li>
                <li>
                    <a
                    class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                    "
                    href="#"
                    >Something else here</a
                    >
                </li>
                </ul>
            </div>
        </div>
    </div>

    <span type="button" aria-haspopup="true" aria-expanded="false" :id="`${task.id}-actions`" @click="showActions" class="cursor-pointer">
        <font-awesome-icon :icon="['fas','ellipsis-h']"/>
        <!-- actions on tasks -->
        <ul role="menu" class="absolute w-24 invisible text-center p-4 rounded shadow-xl bg-gray-100" :aria-labelledby="`${task.id}-actions`" tabindex="-1" aria-orientation="vertical">
            <!-- <ul> -->
                <li class="py-1" tabindex="-1"><a href="#">Edit</a></li>
                <!-- <li class="divider-y"></li> -->
                <li class="py-1" tabindex="-1"><a href="#">Delete</a></li>
            <!-- </ul> -->
        </ul>
        <!-- actions on tasks -->
    </span>


    </div>
</template>

<script>
export default {
    methods: {
        showActions(e)
        {
            let target_id = e.target.id;
            let el = document.querySelector(`[aria-labelledby="${target_id}"]`);
            console.log(el);
            el.classList.toggle('hidden');
        }
    }
}
</script>