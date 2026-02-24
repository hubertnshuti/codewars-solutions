        if (isCharUpper !== isUpperCase) {
          result += "#";
          isUpperCase = isCharUpper;
          lastKey = ""; // Reset wait timer on switch
          wasHold = false;
        }
      }
​
      sequence = keyMap[lowerChar];
      currentKey = sequence[0];
    }
​
    // Check wait condition: Same key, previous wasn't a hold, current isn't a fresh hold override
    if (currentKey === lastKey && !wasHold) {
      result += " ";
    }
​
    result += sequence;
    lastKey = currentKey;
    wasHold = isHold;
  }
​
  return result;
}