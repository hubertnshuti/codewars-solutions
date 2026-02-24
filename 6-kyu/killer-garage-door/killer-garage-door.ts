          if (position === 0) direction = 1;
          else if (position === 5) direction = -1;
        }
      }
    }
​
    // 2. Apply Movement
    position += direction;
​
    // 3. Handle Limits (Clamping)
    if (position > 5) {
      position = 5;
      direction = 0;
    }
    if (position < 0) {
      position = 0;
      direction = 0;
    }
​
    result += position;
  }
​
  return result;
}