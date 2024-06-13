"use client"

import { Button } from '@mui/material'
import Carousel from 'next-elastic-carousel'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface Props {
  children: React.ReactNode
}

export const CustomCarousel = ({ children }: Props) => {
  return (
    <Carousel
      itemsToShow={3}
      transitionMs={1000}
      pagination={false}
      renderArrow={(a) =>
        <Button
          color="warning"
          onClick={a.onClick}>{a.type === 'PREV' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </Button>
      }
      renderLoading={<></>}
    >
      {children}
    </Carousel>
  )
}

