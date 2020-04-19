import React from 'react';

const Footer = () => {
  return (
  <div>  
    <footer>
	       
	        <div className="container">
              <div className="row mt-5">
              <div className="col-md-8">
	            <div className="ftco-footer-widget mb-4">
	              <h2 className="ftco-heading-2">Roomate Connector</h2>
	              <p>Living with someone isn't easy. That's why we help you browse profiles until you find the right one.</p>
	              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
	                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
	                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
	                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
	              </ul>
	            </div>
	          </div>
	          
	          <div className="col-md-4">
	            <div className="ftco-footer-widget mb-4">
	            	<h2 className="ftco-heading-2">Contact Us</h2>
	            	<div className="block-23 mb-3">
		              <ul>
		                <li><i className="fa fa-map-marker"></i><span className="text">887 Northeastern university, Boston, MA.</span></li>
		                <li><a href="tel:1-2019895340"><i className="fa fa-mobile"></i><span className="text">+1 201 989 5340</span></a></li>
						<li><a href="mailto:roomateconnector@gmail.com"><i className="fa fa-envelope"></i><span className="text">roommateconnector@gmail.com</span></a></li>
		              </ul>
		            </div>
	            </div>
	          </div>
              </div>
	        </div>
	        <div className="row">
	          <div className="col-md-12 text-center">
			  
					<a href="#" class="" data-toggle="modal" data-target="#exampleModal">
					<span className="text">Privacy Policy</span>
					</a>


					<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-lg" role="document">
						<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Privacy Policy Generator</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<ul>
								<li>Not everyone knows how to make a Privacy Policy agreement, especially with CCPA or GDPR or CalOPPA or PIPEDA or
									 Australia's Privacy Act provisions. If you are not a lawyer or someone who is familiar to Privacy Policies,
									  you will be clueless. 
									  Some people might even take advantage of you because of this. Some people may even extort money from you. 
									  These are some examples that we want to stop from happening to you.</li>
							<li>Our Privacy Policy Generator can help you make sure that your business complies with the law. 
								We are here to help you protect your business, yourself and your customers.</li>						
								<li>Fill in the blank spaces below and we will create a personalized website Privacy Policy for your business. 
									No account registration required. Simply generate & download a Privacy Policy in seconds!</li>
															<li>We will help you protect yourself by generating a Privacy Policy.</li>
<li>Small remark when filling in this Privacy Policy generator: Not all parts of this Privacy Policy might be applicable to your website.
	 When there are parts that are not applicable, these can be removed. Optional elements can be selected in step 2. 
	 The accuracy of the generated Privacy Policy on this website is not legally binding. Use at your own risk.
</li>
							</ul>
							

							
							
							
							
						</div>
						
						</div>
					</div>
					</div>
	            <p>
	  Copyright ©<script>document.write(new Date().getFullYear());</script>2020 All rights reserved | This template is made by CodeBiryani
	 </p>
	          </div>
	        </div>
	    </footer>
  </div>
  )
}


export default Footer;