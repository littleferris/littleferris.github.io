#!/bin/bash
dpkg-deb -bZgzip ./projects/pixelsearch debs
dpkg-deb -bZgzip ./projects/blackpixelsearch debs
