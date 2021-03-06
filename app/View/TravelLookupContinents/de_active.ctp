<?php
$this->Html->addCrumb('Activate / Deactivate Continent', 'javascript:void(0);', array('class' => 'breadcrumblast'));
echo $this->Form->create('TravelLookupContinent', array('method' => 'post',
    'id' => 'parsley_reg',
    'novalidate' => true,
    'inputDefaults' => array(
        'label' => false,
        'div' => false,
        'class' => 'form-control',
    )
));
?>
<div class="col-sm-12" id="mycl-det">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">Activate / Deactivate Information</h4>
        </div>
        <div class="panel-body">
            <fieldset>
                <legend><span>Activate / Deactivate Continent</span></legend>
            </fieldset>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label for="reg_input_name"  class="req" style="margin-left: 13px;">Choose Action</label>
                        <span class="colon">:</span>
                        <div class="col-sm-4"><?php
echo $this->Form->input('active', array('options' => array('TRUE' => 'Activate', 'FALSE' => 'Deactivate'), 'empty' => '--Select--', 'disabled' => $Types, 'selected' => '--Select--','data-required' => 'true'));
?></div>
                    </div>
                </div>
                <div class="col-sm-12 toggle" style="display: none;">
                    <div class="col-sm-6">                        
                        <div class="form-group">
                            <label for="reg_input_name">Continent</label>
                            <span class="colon">:</span>
                            <div class="col-sm-10">
                                <?php
                                echo $this->Form->input('continent_name', array('readonly' => 'true'));
                                ?></div>
                        </div>

                        <div class="form-group">
                            <label for="reg_input_name">Local Status</label>
                            <span class="colon">:</span>
                            <div class="col-sm-10"><?php
                                echo $this->Form->input('continent_status', array('options' => array('1' => 'OK', '2' => 'ERROR'), 'empty' => '--Select--', 'disabled' => 'true'));
                                ?></div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="reg_input_name">Continent Code</label>
                            <span class="colon">:</span>
                            <div class="col-sm-10">
                                <?php
                                echo $this->Form->input('continent_code', array('readonly' => 'true'));
                                ?></div>
                        </div>

                        <div class="form-group">
                            <label for="reg_input_name">WTB Status</label>
                            <span class="colon">:</span>
                            <div class="col-sm-10"><?php
                                echo $this->Form->input('wtb_status', array('options' => array('1' => 'OK', '2' => 'ERROR'), 'empty' => '--Select--', 'disabled' => 'true'));
                                ?></div>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                    <div class="row">
                        <div class="col-sm-1">
                            <?php
                            echo $this->Form->submit('Action', array('class' => 'btn btn-success sticky_success'));
                            ?>
                        </div>
                        <div class="col-sm-1">
                            <?php echo $this->Form->button('Reset', array('type' => 'reset', 'class' => 'btn btn-danger sticky_important')); ?>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
echo $this->Form->end();
?>  
<script>
    $("#TravelLookupContinentActive").change(function(){
        //alert()
        $(".toggle").toggle();
    });
</script>



