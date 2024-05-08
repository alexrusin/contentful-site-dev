import Link from "next/link";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./social-media-icons";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A to Z Massage
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            4000 Central Florida Blvd, Orlando, FL 32816
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Phone: 813-555-0100
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            FOLLOW ON SOCIAL MEDIA
          </p>
          <div className="flex space-x-2 mt-1">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <YoutubeIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
        © 2023 A to Z Massage. All rights reserved.
      </p>
    </footer>
  );
}
