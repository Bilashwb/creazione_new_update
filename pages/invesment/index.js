import React from 'react'
import { useRouter } from 'next/router';
export default function index() {
const router = useRouter()
  console.log(router.query.id);
  return (
    <div>Invesment</div>
  )
}
