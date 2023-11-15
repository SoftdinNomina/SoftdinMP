<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue'
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
} from '@headlessui/vue';

import {
    ArrowUturnLeftIcon,
    Bars3Icon,
    DocumentChartBarIcon,
    InboxIcon,
    PencilSquareIcon,
    TrashIcon,
    UsersIcon,
    XMarkIcon,
    CurrencyDollarIcon,
    AtSymbolIcon,
    DevicePhoneMobileIcon,
    ChevronDownIcon,
    DocumentDuplicateIcon,
    BuildingOffice2Icon,
    UserIcon
} from '@heroicons/vue/24/outline';
import { Checkbox, useRecaptchaProvider } from 'vue-recaptcha/head';
useRecaptchaProvider()
const recaptcha_error = ref();
const response = ref()

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});



const downloads = [
    {
        name: 'Nomina',
        description: 'Escriba aqui una descripcion de nomina.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Presupuesto',
        description: 'Escriba aqui una descripcion de presupuesto.',
        href: '#',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Virtual',
        description: "Escriba aqui una descripcion de virtual.",
        href: '#',
        icon: AtSymbolIcon,
    },
    {
        name: 'Android',
        description: "Escriba aqui una descripcion de android.",
        href: '#',
        icon: DevicePhoneMobileIcon,
    },
]
const features = [
    {
        name: 'Liquidación de nómina',
        description: 'Brindamos a nuestros clientes la facilidad en el manejo administrativo de la liquidación de la nómina de su personal.',
        icon: InboxIcon,
    },
    {
        name: 'Liquidación de contratos',
        description: 'Cuando un contrato de trabajo finaliza es necesario proceder a liquidar diferentes conceptos que el empleador adeuda al trabajador.',
        icon: UsersIcon,
    },
    {
        name: 'Liquidación de seguridad social',
        description: 'El trabajador y el empleador están obligados a realizar aportes y contribuciones que correspondientes a jubilaciones, seguridad social, etcétera. El empleador es el responsable de retener e ingresar el aporte obligatorio que debe realizar el trabajador.',
        icon: TrashIcon,
    },
    {
        name: 'Liquidación de vacaciones',
        description: 'Todo trabajador tiene derecho a 15 día de vacaciones por cada año trabajado, y se pagan con el salario que esté devengando a la fecha en que se a disfrutar sus vacaciones.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Liquidación Nómina Electrónica',
        description: 'Emite los comprobantes de pago de Nómina electrónica en tiempo real.',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Tarjetas de Presentación Electrónica',
        description: 'El trabajador o el empleador podran tener una tarjeta de presentación electrónica.',
        icon: ArrowUturnLeftIcon,
    }
]

</script>

<template>
    <Head title="Bienvenido" />
    <div class="h-screen bg-white">
        <div class="h-full overflow-y-hidden">
            <Popover class="sticky top-0 z-50 w-full bg-white shadow-md h-[10vh]">
                <div
                    class="flex items-center justify-between h-full px-6 mx-auto align-middle max-w-7xl md:justify-start md:space-x-10 lg:px-8">
                    <div class="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#welcome">
                            <p class="text-4xl uppercase bg-clip font-black font-sans text-transparent bg-gradient-to-r from-[#57c274] to-[#01e6f8]"
                                style="-webkit-background-clip: text;">
                                SOFTDIN</p>
                        </a>
                    </div>
                    <div class="-my-2 -mr-2 md:hidden">
                        <PopoverButton
                            class="relative inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open menu</span>
                            <Bars3Icon class="w-6 h-6" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                    <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
                        <a href="#services" class="text-base font-medium text-gray-500 hover:text-gray-900">Servicios</a>
                        <Popover class="relative" v-slot="{ open }">
                            <PopoverButton
                                :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                                <span>Descargar</span>
                                <ChevronDownIcon
                                    :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                                    aria-hidden="true" />
                            </PopoverButton>
                            <transition enter-active-class="transition duration-200 ease-out"
                                enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                                leave-active-class="transition duration-150 ease-in"
                                leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                                <PopoverPanel
                                    class="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                                    <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2">
                                            <a v-for="item in downloads" :key="item.name" :href="item.href"
                                                class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                                <div
                                                    class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-[#57c274] to-[#01e6f8] text-white sm:h-12 sm:w-12">
                                                    <component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                                                    <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </transition>
                        </Popover>
                        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Contacto</a>
                        <a href="https://webmail1.hostinger.co/"
                            class="text-base font-medium text-gray-500 hover:text-gray-900">WebMail</a>
                    </PopoverGroup>
                    <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                        <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                            class="inline-flex justify-center gap-x-2 rounded-md bg-gradient-to-r from-[#57c274] to-[#01e6f8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-50">
                        Ir a dashboard</Link>
                        <Menu as="div" class="relative inline-block text-left" v-if="canLogin">
                            <div>
                                <MenuButton
                                    class="inline-flex w-full justify-center gap-x-2 rounded-md bg-gradient-to-r from-[#57c274] to-[#01e6f8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-50">
                                    Ingresar
                                    <ChevronDownIcon class="w-5 h-5 -mr-2 text-white" aria-hidden="true" />
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                enter-to-class="transform scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-in"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-52 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1">
                                        <MenuItem v-slot="{ active }">
                                        <a :href="route('login')"
                                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                                            <BuildingOffice2Icon
                                                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true" />
                                            Portal de empresa
                                        </a>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <a :href="route('login')"
                                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                                            <UsersIcon class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true" />
                                            Portal de empleados
                                        </a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>


                <transition enter-active-class="duration-200 ease-out" enter-from-class="scale-95 opacity-0"
                    enter-to-class="scale-100 opacity-100" leave-active-class="duration-100 ease-in"
                    leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
                    <PopoverPanel focus
                        class="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden">
                        <div
                            class="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                            <div class="px-5 pt-5 pb-6">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="font-sans text-4xl font-black text-transparent uppercase bg-clip bg-gradient-to-r from-[#57c274] to-[#01e6f8]"
                                            style="-webkit-background-clip: text;">
                                            SOFTDIN</p>
                                    </div>
                                    <div class="-mr-2">
                                        <PopoverButton
                                            class="relative inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span class="absolute -inset-0.5" />
                                            <span class="sr-only">Close menu</span>
                                            <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <nav class="grid grid-cols-1 gap-7">
                                        <a v-for="item in downloads" :key="item.name" :href="item.href"
                                            class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                                            <div
                                                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-[#57c274] to-[#01e6f8] text-white">
                                                <component :is="item.icon" class="w-6 h-6" aria-hidden="true" />
                                            </div>
                                            <div class="ml-4 text-base font-medium text-gray-900">{{ item.name }}</div>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div class="px-5 py-6">
                                <div class="grid grid-cols-2 gap-4">
                                    <a href="#services"
                                        class="text-base font-medium text-gray-900 hover:text-gray-700">Servicios</a>
                                    <a href="#contacts"
                                        class="text-base font-medium text-gray-900 hover:text-gray-700">Contacto</a>
                                    <a href="https://webmail1.hostinger.co/"
                                        class="text-base font-medium text-gray-900 hover:text-gray-700">WebMail</a>
                                </div>
                                <div class="mt-6" v-if="canLogin">
                                    <a href="#"
                                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-[#57c274] to-[#01e6f8] bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-[#01e6f8] hover:to-[#57c274]">
                                        <BuildingOffice2Icon class="w-5 h-5 mr-3 text-white group-hover:text-gray-500"
                                            aria-hidden="true" />
                                        Portal de empresa
                                    </a>
                                    <p class="mt-6 text-base font-medium text-center text-gray-500">
                                        <a href="#"
                                            class="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-[#57c274] to-[#01e6f8] bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-[#01e6f8] hover:to-[#57c274]">
                                            <UsersIcon class="w-5 h-5 mr-3 text-white group-hover:text-gray-500"
                                                aria-hidden="true" />
                                            Portal de empleados
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
            <a name="welcome" />
            <main class="overflow-y-auto snap-mandatory snap-y max-h-[87vh] rounded-md">
                <!-- Hero section -->
                <div class="snap-center relative h-[87vh] p-5 flex items-center justify-center">
                    <a name="welcome" />
                    <div class="w-[100vw] max-w-[100vw] sm:px-6 lg:px-8">
                        <div class="relative w-full min-h-[80vh] shadow-xl sm:overflow-hidden sm:rounded-2xl">
                            <div class="absolute inset-0">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                    alt="People working on laptops" />
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-[#57c274] to-[#01e6f8] mix-blend-multiply" />
                            </div>
                            <div class="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                                <h1 class="text-4xl font-bold tracking-tight text-center sm:text-5xl lg:text-6xl">
                                    <span class="block text-white">¡Toma el control!</span>
                                    <span class="block text-white">Somos tu aliado estrategico</span>
                                </h1>
                                <p class="max-w-lg mx-auto mt-6 text-xl text-center text-white sm:max-w-3xl">
                                    Nos comprometemos a proporcionar la mejor solución para su negocio.
                                </p>
                                <div class="max-w-sm mx-auto mt-10 sm:flex sm:max-w-none sm:justify-center">
                                    <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
                                        <a href="#contacts"
                                            class="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-[#57c274] to-[#01e6f8] px-4 py-3 text-base font-medium text-white shadow-sm hover:from-[#01e6f8] hover:to-[#57c274] sm:px-8">
                                            Contáctanos
                                        </a>
                                        <!-- <a href="#"
                                        class="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                                        Live demo
                                    </a> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a name="services" />
                <div class="snap-center bg-gradient-to-r from-[#57c274] to-[#01e6f8] h-[87vh]">
                    <div
                        class="flex flex-col justify-center h-full max-w-4xl px-6 py-5 sm:pb-24 sm:pt-20 lg:max-w-7xl lg:px-8 lg:pt-24">
                        <h2 class="w-full text-3xl font-bold tracking-tight text-left text-white">
                            Explora los Servicios que ofrecemos para usted</h2>
                        <p class="w-full max-w-3xl mt-4 text-lg text-left text-white">Software para la liquidación de
                            Nómina,
                            liquidación de las prestaciones sociales y seguridad social, para empresas y cooperativas de
                            trabajo
                            asociado.</p>
                        <div class="flex gap-2 mt-12 overflow-y-auto">
                            <div v-for="feature in features" :key="feature.name"
                                class="border border-gray-100 min-w-[50vw] sm:min-w-[30vw] bg-white bg-opacity-10 rounded-lg text-center p-2">
                                <div class="flex items-center gap-2">
                                    <span
                                        class="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                                        <component :is="feature.icon" class="w-6 h-6 text-white" aria-hidden="true" />
                                    </span>
                                    <h3 class="w-full text-lg font-black text-white">{{ feature.name }}</h3>
                                </div>
                                <div class="mt-6">
                                    <p class="mt-2 text-base text-white">{{ feature.description }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <a name="contacts"></a>
                </div>
                <!-- CTA Section -->
                <div class="snap-center min-h-[87vh] bg-white flex justify-center align-middle">
                    <div
                        class="max-w-4xl sm:py-12 lg:flex lg:max-w-full lg:w-full lg:items-center lg:justify-between lg:px-8">
                        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span class="block">¿Listo para ser aliados?</span>
                            <span
                                class="-mb-1 block bg-gradient-to-r from-[#57c274] to-[#01e6f8] bg-clip-text pb-1 text-transparent">
                                Dejanos brindarte mas informacion
                            </span>
                        </h2>
                        <div class="space-y-4 sm:flex sm:space-x-5 sm:space-y-0">
                            <form action="#" method="POST" class="">
                                <div class="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
                                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                        <div>
                                            <label for="first-name"
                                                class="block text-sm font-semibold leading-6 text-gray-900">
                                                Nombres
                                            </label>
                                            <div class="mt-1">
                                                <input type="text" name="first-name" id="first-name"
                                                    autocomplete="given-name"
                                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#01e6f8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#57c274] sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="last-name"
                                                class="block text-sm font-semibold leading-6 text-gray-900">
                                                Apellidos
                                            </label>
                                            <div class="mt-1">
                                                <input type="text" name="last-name" id="last-name"
                                                    autocomplete="family-name"
                                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#01e6f8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#57c274] sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div class="mt-1">
                                                <input type="email" name="email" id="email" autocomplete="email"
                                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#01e6f8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#57c274] sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <label for="phone-number"
                                                class="block text-sm font-semibold leading-6 text-gray-900">
                                                Telefono
                                            </label>
                                            <div class="mt-1">
                                                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#01e6f8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#57c274] sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <label for="message"
                                                class="block text-sm font-semibold leading-6 text-gray-900">
                                                Mensaje
                                            </label>
                                            <div class="mt-1">
                                                <textarea name="message" id="message" rows="4"
                                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#01e6f8] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#57c274] sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div class="flex items-center h-full align-middle sm:grid sm:grid-cols-2 sm:col-span-2">
                                            <div>
                                                <Checkbox v-model="response" />
                                                <span v-if="recaptcha_error" class="flex justify-around error-message">
                                                    Confirma que no eres un robot</span>
                                            </div>
                                            <div class="flex justify-center w-full p-3 sm:flex sm:justify-end sm:p-3">
                                                <button type="submit"
                                                    class="w-full h-full sm:h-auto sm:w-auto rounded-md bg-gradient-to-r from-[#57c274] to-[#01e6f8] px-3.5 py-2.5 text-center text-xl font-semibold text-white shadow-sm hover:bg-[#57c274] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57c274]">
                                                    Enviar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="bg-gray-50" aria-labelledby="footer-heading">
                <h2 id="footer-heading" class="sr-only">Footer</h2>
                <div class="px-6 mx-auto max-w-7xl lg:px-8">
                    <div class="pt-1 md:flex md:items-center md:justify-between">
                        <p class="mt-8 text-sm text-gray-400 md:order-1 md:mt-0">&copy; 2023 SoftDIN, Inc. All rights
                            reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>








