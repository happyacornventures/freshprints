#!/bin/bash
# Usage: ./autoprint.sh <file-to-print> [printer-name]

FILE="$1"
PRINTER="$2"

if [ -z "$FILE" ]; then
  echo "Usage: $0 <file-to-print> [printer-name]"
  echo "Prints the specified file to the printer in simplex mode"
  exit 1
fi

if [ -z "$PRINTER" ]; then
  # Use default printer
  lp -o fit-to-page "$FILE"
else
  lp -d "$PRINTER" -o fit-to-page "$FILE"
fi
