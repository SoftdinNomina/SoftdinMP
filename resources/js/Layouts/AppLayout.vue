<script setup>
import { ref } from "vue";
import { Head, Link, router } from '@inertiajs/vue3';
import 'primeicons/primeicons.css'
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Menubar from 'primevue/menubar';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";

defineProps({
    title: String,
});

const logout = () => {
    router.post(route('logout'));
};

const items = ref([
    // {
    //     label: 'Dashboard',
    //     icon: 'pi pi-home',
    //     command: () => {router.get(route('dashboard'))}
    // },
    {
        label: 'Maestros',
        icon: 'pi pi-star',
        items: [
            {
                label: 'Configuración Formularios',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Ubicación Geografica',
                icon: 'pi pi-bolt',
                items: [
                    {
                        label: 'Paises',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Departamentos / Estados',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ciudad',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Barrios',
                        icon: 'pi pi-palette'
                    }
                ]
            },
            {
                label: 'Hojas de Vida',
                icon: 'pi pi-bolt',
                items: [
                    {
                        label: 'Registros',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Datos Generales',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Datos Familiares',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Estudios Realizados',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Experiencia Laboral',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Referencias',
                                icon: 'pi pi-palette'
                            }
                        ]
                    },
                    {
                        label: 'Estratos',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Nivel Educativo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Profesiones',
                        icon: 'pi pi-palette'
                    }
                ]
            },
            {
                label: 'Nomina',
                icon: 'pi pi-bolt',
                items: [
                    {
                        label: 'Agrupaciones',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Centro de Costos',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Divisiones',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Sedes',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Sucursales',
                                icon: 'pi pi-palette'
                            }
                            ,
                            {
                                label: 'Sucursal PILA',
                                icon: 'pi pi-palette'
                            },
                        ]
                    },
                    {
                        label: 'Cargos',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Conceptos de ReteFuente',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Fondos de Solidaridad',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Motivo de Retiro',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Novedades',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Conceptos de Novedades',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Conceptos por Empresas',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Rubro Contable',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Asignación Contable',
                                icon: 'pi pi-palette'
                            }
                        ]
                    },
                    {
                        label: 'Oficina de Juzgados',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Registros UVT',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'SubTipo de Cotizaciones',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Tipo de Aportante',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Tipos de Contratos',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Tipos de Cotizantes',
                        icon: 'pi pi-palette'
                    }
                ]
            },
            {
                label: 'Terceros',
                icon: 'pi pi-bolt',
                items: [
                    {
                        label: 'Registros de Terceros',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Configuración Cliente',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Modalidad de Nomina',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Configuración de Certificados',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Configuración Envios de Correos',
                                icon: 'pi pi-palette'
                            }
                        ]
                    },
                    {
                        label: 'Empresas PILA',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Cuentas Bancarias',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Comunicaciones',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contratación',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Inscripción a la Empresa',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Registro del Contrato',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Prorroga',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Termino',
                icon: 'pi pi-bolt'
            }
        ]
    },
    {
        label: 'Novedades',
        icon: 'pi pi-envelope',
        items: [
            {
                label: 'Embargos',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Fondos / Ahorros',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Horas Extras',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Ingresos o Descuentos Consecutivos',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Retención en la Fuente',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Otros Ingresos o Descuentos',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Prestamos',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Seguridad Social',
                icon: 'pi pi-bolt',
                items: [
                    {
                        label: 'Aportes Voluntarios',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Registros de Novedades',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Ejecuciones',
        icon: 'pi pi-envelope',
        items: [
            {
                label: 'Nomina',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Seguridad Social',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Liquidación de Vacaciones',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Liquidación de Prestaciones Sociales',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Liquidación de Contrato',
                icon: 'pi pi-bolt'
            }
        ]
    },
    {
        label: 'Informes',
        icon: 'pi pi-envelope',
        items: [
            {
                label: 'Analisis Nomina',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Analisis Seguridad Social',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Transferencias Bancarias',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Transferencias Contables',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Buscador Nomina',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Buscador Hoja de Vida',
                icon: 'pi pi-bolt'
            }
            ,
            {
                label: 'Certificados de Retencion en la Fuente',
                icon: 'pi pi-bolt'
            }
        ]
    },
    {
        label: 'Seguridad',
        icon: 'pi pi-envelope',
        items: [
            {
                label: 'Login',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Auditoria',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Registros de Usuarios',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Cambio de Contraseña',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Nivel de Seguridad por Usuario',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Nivel de Seguridad por Roll',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Calendario',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Registrar Mensajes',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Ruta de Folder',
                icon: 'pi pi-bolt'
            }
        ]
    }
])

</script>

<template>
    <Head :title="title" />
    <Banner />
    <Disclosure as="nav" class="hidden sm:block bg-white shadow" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <Link :href="route('dashboard')">
                        <ApplicationMark class="block h-9 w-auto" />
                        </Link>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                        <Menubar :model="items" class="" />
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                        class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton
                                class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-200"
                            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <!-- <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                                    Profile</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                                </MenuItem> -->
                                <MenuItem v-slot="{ active }">
                                <a href="#" @click="logout()"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                    Cerrar sesion</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>
    </Disclosure>
    <div class="sm:hidden border-b border-gray-200 shadow-md space-y-1 pb-4 pt-2">
        <Menubar :model="items">
            <template #end>
                <div class="flex items-center w-[60vw] justify-between">
                    <Link :href="route('dashboard')" class="">
                    <ApplicationMark class="block h-6 w-auto" />
                    </Link>
                    <div class="flex items-center">
                        <button type="button"
                            class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="absolute -inset-1.5" />
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative ml-3">
                            <div>
                                <MenuButton
                                    class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="absolute -inset-1.5" />
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="" />
                                </MenuButton>
                            </div>
                            <transition enter-active-class="transition ease-out duration-200"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <!-- <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                                    Profile</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                                </MenuItem> -->
                                    <MenuItem v-slot="{ active }">
                                    <a href="#" @click="logout()"
                                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                        Cerrar sesion</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </template>
        </Menubar>
    </div>
    <main>
        <slot />
    </main>
</template>
