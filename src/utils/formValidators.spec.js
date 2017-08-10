/**
 * formValidators.spec.js
 */
import React from 'react'
import {lorem} from 'faker'
import {expect} from 'chai'

import {
  username,
  email,
  password,
  ip,
} from './formValidators'


describe('formValidators (username)', () => {

  it('should recognize input as valid username', () => {
    [
      'siciarek',
      'siciareksiciarek',
    ].forEach(function(string) {
      expect(username(string)).to.equal(undefined)
    })
  })

  it('should recognize input as invalid username', () => {
    [
      'siciare',
      'siciareksiciarekx',
      'Siciarek',
      'siciarek1',
      'siciarek@wp.pl',
    ].forEach(function(string) {
      expect(username(string)).to.equal('Should be 8-16 characters long, lowercase latin letters (a-z) only')
    })
  })
})

describe('formValidators (email)', () => {

  it('should recognize input as valid email', () => {
    [
      'siciarek@gmail.com',
      'siciarek@gmail.com.pl',
    ].forEach(function(string) {
      expect(email(string)).to.equal(undefined)
    })
  })

  it('should recognize input as invalid email', () => {
    [
      'siciarek',
      'sici@arek@gmail.com',
    ].forEach(function(string) {
      expect(email(string)).to.equal('Invalid email address')
    })
  })
})

describe('formValidators (password)', () => {

  it('should recognize input as valid password', () => {
    [
      '$1Ab9999',
      '$1Ab9999$1Ab9999',
    ].forEach(function(string) {
      expect(password(string)).to.equal(undefined)
    })
  })

  it('should recognize input as invalid password', () => {
    [
      'a',
      'aaaaaaaa',
      'AAAAAAAA',
      '11111111',
      '$%^@$%^@',
      '$1Ab999',
      '$1Ab9999$1Ab99991',
    ].forEach(function(string) {
      expect(password(string)).to.equal('Should be 8-16 chars long only letters, digits and at least one special char')
    })
  })
})


describe('formValidators (ip)', () => {

  it('should recognize input as valid ip number', () => {
    [
      '0.0.0.0',
      '192.168.1.1',
      '127.0.0.1',
      '255.255.255.255',
    ].forEach(function(string) {
      expect(ip(string)).to.equal(undefined)
    })
  })

  it('should recognize input as invalid ip number', () => {
    [
      'a',
      'a.a.a.a',
      '255.255.255.255x',
      '255.255.255.256',
    ].forEach(function(string) {
      expect(ip(string)).to.equal('Invalid ip number')
    })
  })
})
