import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import React from 'react'

const Donate = () => {
    return (
        <main className='flex flex-col items-center py-4 space-y-12'>
            <h1 className='text-center'>Donate to Iskcon Rourkela</h1>
            <div className='space-y-3 w-[80vw]'>
                <p>Dear Devotees,</p>
                <p>With your continued blessings and devotion, our temple has remained a sacred space for prayer, peace, and community. We humbly request your generous support through donations to help us maintain temple activities, rituals, and upkeep.</p>
                <p>Every contribution, big or small, helps us preserve our traditions and serve the community better.</p>
                <p>May your kindness bring you divine blessings and inner peace.</p>
            </div>
            <div className='border-t border-b text-center p-3 w-[80vw]'>
                <p>
                    Indian residents are eligible for giving a tax exempt donation
                </p>
                <p>
                    under section 80G of the INCOME TAX ACT.
                </p>
                <p>
                    PAN NO.: AAAT10017P
                </p>
                <p>
                    For NEFT, RTGS, Bank Transfer
                </p>
                <p>
                    After making the deposit / E-Payment/ Bank transfer,
                </p>
                <p>
                    kindly send your transaction details by sridham.govinda@gmail.com
                </p>
                <p>
                    Mob: 8658490726
                </p>
            </div>
            <div className='grid ld:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-20 gap-10'>
                <div className=''>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    Anna dan seva
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Devotee</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">250 &times; 21</TableCell>
                                <TableCell className='text-center'>5250</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">500 &times; 21</TableCell>
                                <TableCell className='text-center'>10,500</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">750 &times; 21</TableCell>
                                <TableCell className='text-center'>15,750</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">1000 &times; 21</TableCell>
                                <TableCell className='text-center'>21,000</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    Bank Detail
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableHeader>
                            <TableRow>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Bank name</TableCell>
                                <TableCell>UNION BANK</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">A/C name</TableCell>
                                <TableCell>ISKCON</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">A/C no.</TableCell>
                                <TableCell>134910100017779</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">IFSC Code</TableCell>
                                <TableCell>UBIN0813494</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Branch name</TableCell>
                                <TableCell>Civil Township, Rourkela</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className='p-2 border border-black'>
                    <Image src={'/donate-qr.jpg'} alt={'Iskcon Rourkela Donation QR Code'} width={300} height={300} />
                </div>
            </div>
        </main>
    )
}

export default Donate