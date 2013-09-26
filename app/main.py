#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os
import logging
import urllib2
import logging
import re
import cgi
import cPickle as pickle
from google.appengine.ext.webapp import util
from google.appengine.api import urlfetch
from urlparse import urlparse
from xml.etree import cElementTree as ET
from time import gmtime, strftime
import datetime
from google.appengine.ext import ndb
from google.appengine.api import memcache
from google.appengine.api import images

import jinja2
import webapp2

try:
    import json                # Python 2.7.
except ImportError:
    import simplejson as json  # Python 2.5.

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'])

import ast



class mainHandler(webapp2.RequestHandler):
    def get (self, q):
        self.redirect('index.html?' + self.request.query_string);


app = webapp2.WSGIApplication([
    ('/([^/]+)?', mainHandler)
])
