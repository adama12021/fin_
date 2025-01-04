"use client"
import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Type extends Component {
  render() {
    return (
      <Typewriter
        options={{
          strings: ['Data analyst','consultant BI'],
          autoStart: true,
          loop: true,
          delay: 40
        }}
      />
    );
  }
}

export default Type;