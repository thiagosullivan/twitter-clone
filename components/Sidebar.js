import Image from 'next/image';
import React from 'react';
import SidebarLink from './SidebarLink';
import { FaTwitter } from 'react-icons/fa';
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";


function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 svg-sidebar hoverAnimation'>
          <FaTwitter />
        </div>
        <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
          <SidebarLink text="Home" Icon={HomeIcon} active/>
          <SidebarLink text="Explore" Icon={HashtagIcon}/>
          <SidebarLink text="Notification" Icon={BellIcon}/>
          <SidebarLink text="Messages" Icon={InboxIcon}/>
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon}/>
          <SidebarLink text="Lists" Icon={ClipboardListIcon}/>
          <SidebarLink text="Profiles" Icon={UserIcon}/>
          <SidebarLink text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>
        <button className='hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>
          Tweet
        </button>
        <div className='text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto'>
          <img
            src="https://media.istockphoto.com/vectors/letter-t-logo-lettermark-monogram-typeface-type-emblem-character-vector-id1279365501?k=20&m=1279365501&s=612x612&w=0&h=1UFI8mDtVEZR82_KTCN6qFsCa824X7-Wmg1dz0vBERE="
            className='h-10 w-10 rounded-full xl:mr-2.5'
          />
          <div className='hidden xl:inline leading-5'>
            <h4 className='font-bold'>firebase 1975</h4>
            <p className='text-[#6e767d]'>@firebase1975</p>
          </div>
          <DotsHorizontalIcon className='h-5 hidden xl:inline ml-10' />
        </div>
    </div>
  )
}

export default Sidebar;