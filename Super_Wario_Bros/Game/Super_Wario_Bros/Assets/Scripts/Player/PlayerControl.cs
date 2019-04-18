using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControl : MonoBehaviour {

	public float playerSpeed = 1000.0f;
	private SpriteRenderer spriteRender;
	private Rigidbody2D rg;
	private Animator animator;

	// Use this for initialization
	void Start () {
		spriteRender = this.GetComponent<SpriteRenderer>();
		rg = this.GetComponent<Rigidbody2D> ();
		animator = this.GetComponent<Animator> ();
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	void FixedUpdate(){
		PlayerMovement ();
	}

	void PlayerMovement(){
		if (Input.GetButton("Horizontal")) {
			float horizClick = Input.GetAxis ("Horizontal");
			SpriteVolteo (horizClick);
			//rg.AddForce (new Vector2 (horizClick * playerSpeed * Time.deltaTime, 0.0f));
			animator.SetBool ("player_walking", true);
			this.transform.Translate (Vector2.right * horizClick * playerSpeed * Time.deltaTime);
		}else{
			animator.SetBool ("player_walking", false);
		}

	}
	void SpriteVolteo(float horizClick){
		if (spriteRender.flipX == false && horizClick > 0) {
			spriteRender.flipX = true;
		}else if (spriteRender.flipX == true && horizClick < 0) {
			spriteRender.flipX = false;
		}
	}
}