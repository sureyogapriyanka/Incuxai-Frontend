import Image from "next/image";
import Header from './components/header';
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/register');
}
